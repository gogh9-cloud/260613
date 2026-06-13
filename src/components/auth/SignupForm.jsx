export default function SignupForm() {
  return (
    <div>
      <h2>학생 회원가입</h2>
      <form>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
