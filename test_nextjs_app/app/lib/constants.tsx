// 비밀번호의 정규식이나 몇 글자로 min max를 할지 미리 선언해두면 편하기때문에.

export const PASSWORD_MIN_LENGTH = 5;
export const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/);