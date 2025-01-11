import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
    },
});

export default api;
