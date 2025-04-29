"use server"
import axios from "axios";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import cookieparser from "set-cookie-parser";

export const apirequest = axios.create({
    baseURL: "https://v1.api.capcons.ai/stage/",
    withCredentials: true,
});

// "https://v1.auth.capcons.ai/stage/"
apirequest.interceptors.response.use(
    async (response) => {
        const cookieStore = await cookies();
        const headerCookies = cookieparser.parse(
            response.headers["set-cookie"] ?? [],
            { decodeValues: true }
        );
        if (headerCookies) {
            headerCookies.forEach((cookie) => {
                cookieStore.set(cookie as ResponseCookie);
            });
        }

        return response;
    },
    async (error) => Promise.reject(error)
);

apirequest.interceptors.request.use(
    async (config) => {
        const cookieStore = await cookies();
        const allCookies = Array.from(cookieStore.getAll());
        const cookieHeader = allCookies.map((item) => `${item.name}=${item.value}`);

        if (cookieHeader) {
            config.headers["Cookie"] = cookieHeader;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
