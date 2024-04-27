"use client"
import Link from "next/link";
import FormButton from "../components/button";
import FormInput from "../components/input";
import { ChatBubbleBottomCenterTextIcon, GiftTopIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";
import { smsVerification } from "./action";

const initialState = {
    token: false,
    error: undefined
}

export default function SMSLogin() {
    const [state, action] = useFormState(smsVerification, initialState);

    return (
        <div className="flex flex-col gap-10 p-5">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1>안녕하세요!</h1>
                <h2>Fill in the form below to join!</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">

                {state.token ? (<FormInput
                    type="number"
                    placeholder="인증번호"
                    required={true}
                    name="token"
                    minLength={100000}
                    maxLength={999999}
                    errors={state?.error?.formErrors} //state.errors에 값이 있으면 출력하라는 뜻.
                />) : (<FormInput
                    type="number"
                    placeholder="핸드폰번호"
                    required={true}
                    name="phone"
                    errors={state.error?.formErrors}
                //위 에러를 쓰고싶으면, 초기값(initialState에 error를 넣어주라.)
                />)
                }

                {state.token ? <FormButton text="검증하기" /> : <FormButton text="로그인" />}
            </form>
            <div className="w-full h-px bg-neutral-900" />
            <div>
                <Link
                    className="primary-btn flex flex-row gap-3 items-center justify-center"
                    href="/sms"
                >
                    <span>
                        <GiftTopIcon className="h-5 w-5" />
                    </span>
                    <span>Continue with Github</span>{" "}
                </Link>
            </div>
            <div>
                <Link
                    className="primary-btn flex flex-row gap-3 items-center justify-center"
                    href="/sms"
                >
                    <span>
                        <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                    </span>
                    <span>Continue with KAKAO</span>{" "}
                </Link>
            </div>
        </div>
    );
}