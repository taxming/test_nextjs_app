"use server";

import { z } from "zod";

const checkUsername = (username:string) => !username.includes("admin");
// function checkUsername(username:string){
//     return !username.includes("admin")
// }


const formSchema = z.object({
  username: z.string({
    invalid_type_error:"설정해둔 string타입이 아닌경우 발생하는 에러",
    required_error:"설정해둔 값과 다른 에러"
  })
  .min(3, "너무 짧음")
  .max(10, "너무 김")
  .refine(checkUsername , "custom error"),
  //  .refine((username) => !username.includes("admin"), "custom error"),
  //refine(설정한 함수가 true,false인지에 따라 에러 표기 참고::false여야 에러표기)
  //위처럼 string()이 있다는것 자체가, 항상 required라는걸 의미함. 이걸 피하기 위해서는 뒤에 optional을 붙히면 됨
  email: z.string().email(),
  password: z.string().min(10),
  passwordConfirm: z.string().min(10),
}).refine(({password, passwordConfirm}) => password === passwordConfirm, {message:"패스워드 불일치", path:["passwordConfirm"]});
//마지막처럼 최종저긍로 리파인 하여 변수두개이상 받을수도있음.
//다만, 폼 전체의 에러로 보기때문에 출력이 안됨 따라서 {message,path}적용ㅍ리요 path는 name을 입력

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  const result = formSchema.safeParse(data);
  console.log(result); // --> { success: false, error: [Getter] }
  console.log(result.error?.flatten()); // flatten은 에러관리가 수월
  //parse는 에러를 나타냄 --> safeParse 사용시 에러출력 안함
  // Error: [
  //     {
  //       "code": "too_small",
  //       "minimum": 5,
  //       "type": "string",
  //       "inclusive": true,
  //       "exact": false,
  //       "message": "String must contain at least 5 character(s)",
  //       "path": []
  //     }
  //]

  if (!result.success) {
    return result.error.flatten();
    //이런식 리턴을 넣으면 으로하면 page에서 state를 통해 값 받아 쓸수있음.
  }
}
