<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
</script>

<div class="sign-in-container">
	<div class="sub-container sign-up">
		<div class="logo-sign-up">
			<a href="/">
				<img src={logoImage} alt="logo" />
			</a>
		</div>
		<div class="sign-up-container">
			<div class="sign-up-sec-info">회원가입</div>
			<div class="sign-up-info-container">
				<div class="info">연동할 이메일을</div>
				<div class="info sec">입력해주세요.</div>
			</div>
			<div class="sign-in-input">
				<div class="sign-up-email-input">
					<input
						class="mr10"
						type="email"
						placeholder="이메일을 입력해주세요."
					/>
					<input type="email" placeholder="이메일을 입력해주세요." />
				</div>
			</div>
			<div class="flc jsb">
				<a href="/sign_in">
					<div class="go-back-btn">뒤로가기</div>
				</a>
				<a href="/sign_up/2">
					<div class="basic-btn">다음</div>
				</a>
			</div>
		</div>
	</div>
</div>
