"use client"
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FormInput from "../components/form-input"
import FormButton from "../components/form-button";
import { GiftTopIcon } from "@heroicons/react/16/solid";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { handleForm } from "./action";

export default function Login() {


//const { pending } = useFormStatus(); //state아니고 status.
//이는 action을 실행하는 form과 같은 곳에선 사용할수없다.
//해당 훅은 자동으로 부모 form을 찾는다. 아래는 <form>...<FormButton /> ...</form>
 
const [state, action] = useFormState(handleForm, {potato:1} as any);  // <-- 이것도 "use client필요" 따라서, handleForm을 별도로 작성
//useFormState(실행할함수, 초기값)  초기값 부분은 호출하는 함수가 return하는 형태와 동일해야하는것
  return (
    <div className="flex flex-col gap-10 p-5">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요!</h1>
        <h2>Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput 
        type="text"
        placeholder="아이디"
        required={true}
        name="username"
        errors={state.error ?? []}
        />
        <FormInput 
        type="password"
        placeholder="비밀번호"
        required={true}
        name="password"
        errors={state.errors ?? [] } //state.errors에 값이 있으면 출력하라는 뜻. 
        />
 
        <FormButton text="로그인" />
      </form>
      <div className="w-full h-px bg-neutral-900" />
      <div >
        <Link className="primary-btn flex flex-row gap-3 items-center justify-center" href="/sms">
          <span><GiftTopIcon className="h-5 w-5" /></span>
          <span>Continue with Github</span>{" "}
        </Link>
      </div>
      <div >
        <Link className="primary-btn flex flex-row gap-3 items-center justify-center" href="/sms">
          <span><ChatBubbleBottomCenterTextIcon className="h-5 w-5" /></span>
          <span>Continue with KAKAO</span>{" "}
        </Link>
      </div>
    </div>
  );
}
