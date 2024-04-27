"use client";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Input from "../components/input";
import Button from "../components/button";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function Login() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 p-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요!</h1>
        <h2>Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="이름"
          required={false}
          name="username"
          errors={state?.fieldErrors.username}
          maxLength={10}
          minLength={3}
        />
        <Input
          type="email"
          placeholder="이메일"
          required={true}
          name="email"
          errors={state?.fieldErrors.email}
        />
        <Input
          type="text"
          placeholder="패스워드"
          required={true}
          name="password"
          errors={state?.fieldErrors.password}
        />
        <Input
          type="text"
          placeholder="패스워드 확인"
          required={true}
          name="passwordConfirm"
          errors={state?.fieldErrors.passwordConfirm}
        />
        {/* <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-lg ring-neutral-300 ring-1 text-white w-full h-10 focus:outline-none focus:ring-2 p-2 placeholder:text-white"
            type="text"
            placeholder="유저이름"
            required
          />
          <span className="text-red-500 font-medium">input error</span>
        </div> */}
        <Button loading={false} text="로그인" />
      </form>
      <div className="w-full h-px bg-neutral-900" />
      <div>
        <Link
          className="primary-btn flex flex-row gap-3 items-center justify-center"
          href="/sms"
        >
          <span>
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
          </span>
          <span>Sign up with SMS</span>{" "}
        </Link>
      </div>
    </div>
  );
}
