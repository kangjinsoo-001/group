<script lang="ts">
	import { enhance } from "$lib/form";
</script>

<h2>Login</h2>
<div>
	<form method="post" use:enhance>
		<input name="id" type="text" placeholder="아이디 입력" />
		<input name="email" type="email" placeholder="이메일 입력" />
		<input name="name" type="text" placeholder="이름 입력" />
		<input name="password" type="password" placeholder="비밀번호 입력" />
		<div>
			<button type="submit">전송</button>
		</div>
	</form>
</div>
