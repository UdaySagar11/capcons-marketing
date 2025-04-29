"use client"

import React, { useId } from "react"
import { ChevronDownIcon, PhoneIcon } from "lucide-react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
  error?: boolean
  required?: boolean
  id?: string
}

export function PhoneInputComponent({
  value,
  onChange,
  label,
  placeholder = "Enter phone number",
  className,
  disabled = false,
  error = false,
  required = false,
  id,
}: PhoneInputProps) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className={cn("space-y-2", className)} dir="ltr">
      {label && (
        <Label htmlFor={inputId} className={cn(error && "text-red-500")}>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <RPNInput.default
        className={cn(
          "flex rounded-md shadow-xs",
          error && "border-red-500 focus-within:ring-red-500"
        )}
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={(newValue) => onChange(newValue ?? "")}
        disabled={disabled}
      />
    </div>
  )
}

const PhoneInput = ({ className, ...props }: React.ComponentProps<"input">) => {
  return (
    <Input
      data-slot="phone-input"
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10 border border-gray-200",
        className
      )}
      {...props}
    />
  )
}

PhoneInput.displayName = "PhoneInput"

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country)
  }

  return (
    <div className="border border-gray-200 bg-white text-gray-700 focus-within:border-blue-500 focus-within:ring-blue-500/50 hover:bg-gray-50 hover:text-gray-900 has-aria-invalid:border-red-500/60 has-aria-invalid:ring-red-500/20 relative inline-flex items-center self-stretch rounded-s-md py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-gray-500">
          <ChevronDownIcon size={16} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country]

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon size={16} aria-hidden="true" />
      )}
    </span>
  )
}
