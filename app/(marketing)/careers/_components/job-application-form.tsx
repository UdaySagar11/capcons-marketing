"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { jobApplicationSchema, type JobApplicationFormData } from "@/lib/schemas/careers"
import { submitJobApplication } from "@/lib/actions/careers"
import { useTransition } from "react"
import { handleCapconsRequestError } from "@/lib/error-handling"

export const JobApplicationForm = ({ jobId }: { jobId: string }) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      phone: "",
      resumeLink: "",
      coverLetterLink: "",
      linkedinURL: "",
      whyJoin: "",
      candidateLocation: "",
      visaRequirement: false,
    },
  })

  const onSubmit = async (data: JobApplicationFormData) => {
    startTransition(async () => {
      try {
        const result = await submitJobApplication(data, jobId)

        if (result.success) {
          handleCapconsRequestError({
            message: result.message,
            status: 201,
            showToast: true,
          });
          form.reset()
        } else if (result.error === "Invalid form data" && result.fields) {
          Object.entries(result.fields).forEach(([field, errors]) => {
            if (errors?.[0]) {
              form.setError(field as keyof JobApplicationFormData, {
                type: "server",
                message: errors[0],
              })
            }
          })
          handleCapconsRequestError({
            message: "Please fix the errors in the form",
            status: 400,
            showToast: true,
          });
        } else {
          handleCapconsRequestError({
            message: result.error,
            status: 500,
            showToast: true,
          });
        }
      } catch (error) {
        handleCapconsRequestError({
          error,
          fallbackMessage: "Error creating application",
          showToast: true,
        });
      }
    })
  }

  return (
    <div className="pt-6 md:pt-12">
      <h2 className="mb-3 md:mb-6 font-bold text-xl md:text-2xl text-[#400E4D]">Apply for this Job</h2>
      <p className="mb-4 md:mb-8 text-[#2E134D] text-xs md:text-sm">*indicates a required field</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-6">
          <div className="gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">First Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Last Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <div className="gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="emailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Phone *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+1234567890"
                      className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <div className="gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="resumeLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Resume/CV *</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf, .doc, .docx, .txt"
                      onChange={(e) => {
                        const fileList = e.target.files
                        if (fileList) {
                          field.onChange("https://example.com/resume.pdf")
                        }
                      }}
                      className="flex items-center hover:file:bg-[#39089D]/90 file:bg-[#39089D] file:mr-3 md:file:mr-4 file:px-2 md:file:px-3 pt-1.5 pl-1 md:pl-1.5 file:border-0 file:rounded-full file:h-[20px] md:file:h-[26px] h-8 md:h-10 text-gray-500 file:text-white file:text-[10px] md:file:text-xs text-xs md:text-base"
                    />
                  </FormControl>
                  <p className="text-gray-500 text-[10px] md:text-sm">Accepted file types: pdf, doc, docx, txt. Max size: 5MB</p>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverLetterLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Cover Letter</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf, .doc, .docx, .txt"
                      onChange={(e) => {
                        const fileList = e.target.files
                        if (fileList) {
                          field.onChange("https://example.com/cover-letter.pdf")
                        }
                      }}
                      className="flex items-center hover:file:bg-[#39089D]/90 file:bg-[#39089D] file:mr-3 md:file:mr-4 file:px-2 md:file:px-3 pt-1.5 pl-1 md:pl-1.5 file:border-0 file:rounded-full file:h-[20px] md:file:h-[26px] h-8 md:h-10 text-gray-500 file:text-white file:text-[10px] md:file:text-xs text-xs md:text-base"
                    />
                  </FormControl>
                  <p className="text-gray-500 text-[10px] md:text-sm">Accepted file types: pdf, doc, docx, txt. Max size: 5MB</p>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="linkedinURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">LinkedIn Profile *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.linkedin.com/in/johndoe"
                    className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whyJoin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Why do you want to join CapCons? *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your answer here" className="min-h-[80px] md:min-h-[100px] text-xs md:text-base placeholder:text-xs md:placeholder:text-base resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="candidateLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Where are you located? *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="City, Country"
                    className="text-xs md:text-base placeholder:text-xs md:placeholder:text-base h-8 md:h-10 px-3 py-1 md:py-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="visaRequirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Will you now, or in the future require sponsorship for an employment visa in India?</FormLabel>
                <Select onValueChange={(value) => field.onChange(value === "yes")} value={field.value ? "yes" : "no"}>
                  <FormControl>
                    <SelectTrigger className="text-xs md:text-base h-8 md:h-10">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes" className="text-xs md:text-base">Yes</SelectItem>
                    <SelectItem value="no" className="text-xs md:text-base">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <div className="flex justify-center mt-4 md:mt-8">
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#39089D] hover:bg-[#39089D]/90 disabled:opacity-50 px-4 md:px-8 py-1.5 md:py-2 rounded-full text-white text-xs md:text-base transition-all duration-200"
            >
              {isPending ? 'Submitting...' : 'Submit application'}
            </button>
          </div>
        </form>
      </Form>
    </div>
  )
}