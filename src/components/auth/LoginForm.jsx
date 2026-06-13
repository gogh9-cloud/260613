export default function LoginForm() {
  return (
    <div>
      <h2>교사 로그인</h2>
      <form>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
