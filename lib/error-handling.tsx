import { isAxiosError } from "axios";
import { CircleAlert, CircleCheckIcon, TriangleAlert } from "lucide-react";
import { toast } from "sonner";

export enum ErrorStatus {
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}

interface ErrorHandlerRequest {
    error?: any;
    showToast?: boolean;
    message?: string;
    status?: number;
    fallbackMessage?: string;
}

const errorMessages: Record<number, string> = {
    [ErrorStatus.UNAUTHORIZED]: "You are not authorized to perform this action",
    [ErrorStatus.FORBIDDEN]: "You are not allowed to perform this action",
    [ErrorStatus.NOT_FOUND]: "The requested resource was not found",
    [ErrorStatus.INTERNAL_SERVER]: "Something went wrong on the server",
    [ErrorStatus.BAD_GATEWAY]: "The server is down",
    [ErrorStatus.SERVICE_UNAVAILABLE]: "The service is currently unavailable",
    [ErrorStatus.GATEWAY_TIMEOUT]: "The request timed out",
};

const getErrorMessage = (
    status: number,
    responseMessage?: string,
    defaultMessage?: string
): string => {
    return (
        errorMessages[status] ||
        responseMessage ||
        defaultMessage ||
        "Something went wrong"
    );
};

export const handleCapconsRequestError = ({
    error,
    showToast = true,
    message,
    status: customStatus,
    fallbackMessage = "Something went wrong",
}: ErrorHandlerRequest) => {
    if (!error && (message || customStatus)) {
        if (showToast) {
            if (customStatus && customStatus >= 200 && customStatus < 300) {
                toast.custom(
                    () => (
                        <div className="border-border bg-muted  rounded-md border px-4 py-3">
                            <p className="text-sm">
                                <CircleCheckIcon
                                    className="me-3 -mt-0.5 inline-flex text-emerald-500"
                                    size={16}
                                    aria-hidden="true"
                                />
                                {message}
                            </p>
                        </div>
                    ),
                    {
                        position: "top-right",
                    }
                );
            } else if (customStatus && customStatus >= 300 && customStatus < 400) {
                toast.custom(
                    () => (
                        <div className="rounded-md bg-muted  border px-4 py-3">
                            <p className="text-sm">
                                <TriangleAlert
                                    className="me-3 -mt-0.5 inline-flex text-amber-500"
                                    size={16}
                                    aria-hidden="true"
                                />
                                {message || "Warning: Something needs attention"}
                            </p>
                        </div>
                    ),
                    {
                        position: "top-right",
                    }
                );
            } else {
                toast.custom(
                    () => (
                        <div className="rounded-md bg-muted  border px-4 py-3">
                            <p className="text-sm">
                                <CircleAlert
                                    className="me-3 -mt-0.5 inline-flex text-red-500"
                                    size={16}
                                    aria-hidden="true"
                                />
                                {message || fallbackMessage}
                            </p>
                        </div>
                    ),
                    {
                        position: "top-right",
                    }
                );
            }
        }
        return;
    }

    if (isAxiosError(error) && error.code === "ERR_CANCELED") {
        return;
    }

    let errorMessage = message || fallbackMessage;
    let errorStatus = customStatus;

    if (isAxiosError(error)) {
        errorStatus = error.response?.status || 500;

        if (!errorMessage) {
            errorMessage = getErrorMessage(
                errorStatus,
                error.response?.data,
                fallbackMessage
            );
        }
    } else if (error instanceof Error) {
        errorMessage = error.message;
        errorStatus = 500;
    } else if (typeof error === "string") {
        errorMessage = error;
        errorStatus = 500;
    }

    if (showToast && errorMessage && errorStatus) {
        if (errorStatus >= 200 && errorStatus < 300) {
            toast.custom(
                () => (
                    <div className="border-border bg-muted  rounded-md border px-4 py-3">
                        <p className="text-sm">
                            <CircleCheckIcon
                                className="me-3 -mt-0.5 inline-flex text-emerald-500"
                                size={16}
                                aria-hidden="true"
                            />
                            {errorMessage}
                        </p>
                    </div>
                ),
                {
                    position: "top-right",
                }
            );
        } else if (errorStatus >= 300 && errorStatus < 400) {
            toast.custom(
                () => (
                    <div className="rounded-md border bg-muted px-4 py-3">
                        <p className="text-sm">
                            <TriangleAlert
                                className="me-3 -mt-0.5 inline-flex text-amber-500"
                                size={16}
                                aria-hidden="true"
                            />
                            {errorMessage}
                        </p>
                    </div>
                ),
                {
                    position: "top-right",
                }
            );
        } else {
            toast.custom(
                () => (
                    <div className="rounded-md border bg-muted  px-4 py-3">
                        <p className="text-sm">
                            <CircleAlert
                                className="me-3 -mt-0.5 inline-flex text-red-500"
                                size={16}
                                aria-hidden="true"
                            />
                            {errorMessage}
                        </p>
                    </div>
                ),
                {
                    position: "top-right",
                }
            );
        }
    }
    return;
};
