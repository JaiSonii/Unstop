"use client";

import Welcome from "@/components/common/Welcome";
import OAuth from "./OAuth";
import Input from "@/components/ui/Input";
import Divider from "./Divider";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoMail } from "react-icons/io5";
import { BsFillKeyFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; api?: string }>({});

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("auth_token");
            if (token) router.replace("/home");
        }
    }, [router]);

    const validate = () => {
        const next: typeof errors = {};

        if (username.trim() !== "emilys") {
            next.username = 'Username must be "emilys"';
        }

        if (!emailRegex.test(email)) {
            next.email = "Please enter a valid email (e.g. example@gmail.com)";
        }

        if (password.length < 8) {
            next.password = "Password must be at least 8 characters";
        }

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        if (!validate()) return;

        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username.trim(),
                    password,
                    email: email.trim(),
                    expiresInMins: remember ? 43200 : 30, // 30 days if remember checked, else 30 mins
                }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err?.message || "Login failed");
            }

            const data = await res.json();
            localStorage.setItem("auth_token", data?.accessToken || "");
            localStorage.setItem("auth_user", JSON.stringify(data));
            localStorage.setItem("remember_me", remember ? "1" : "0");
            router.replace("/home");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setErrors((prev) => ({ ...prev, api: err.message }));
            } else {
                setErrors((prev) => ({ ...prev, api: "Login failed" }));
            }
        } finally {
            setLoading(false);
        }

    };

    return (
        <form
            onSubmit={onSubmit}
            className="w-full max-w-[520px] md:max-w-[560px] p-6 md:p-10 flex flex-col gap-6 bg-white border border-[#E2E2E2] shadow-sm rounded-[20px]"
        >
            <Welcome />
            <OAuth />
            <Divider />

            <div className="flex flex-col gap-3">
                <Input
                    icon={<MdAccountCircle size={20} color="black" />}
                    label="User name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    error={errors.username}
                />
                <Input
                    icon={<IoMail size={20} color="black" />}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    error={errors.email}
                />
                <Input
                    icon={<BsFillKeyFill size={20} color="black" />}
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    isPassword
                    error={errors.password}
                />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                    <Checkbox checked={remember} onCheckedChange={(v) => setRemember(Boolean(v))} />
                    <span className="text-[16px]">Remember me</span>
                </label>
                <a className="text-[16px] text-primary cursor-pointer hover:underline" href="#">Forgot Password?</a>
            </div>

            {errors.api && (
                <p className="text-sm text-destructive font-medium">{errors.api}</p>
            )}

            <Button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full font-semibold py-7 text-[16px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-[16px] text-black text-center">
                Don’t have an account? <span className="text-primary cursor-pointer">Register</span>
            </p>
        </form>
    );
};

export default Login;