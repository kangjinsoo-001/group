<script context="module">
	import { browser, dev } from "$app/env";

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
	import googleLogoImage from "$lib/image/google_logo.png";
	import naverLogoImage from "$lib/image/naver_logo.png";
	import kakaoLogoImage from "$lib/image/kakao_logo.png";
</script>

<svelte:head>
	<title>sign_in</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="sign-in-container">
	<div class="sub-container">
		<div class="logo-sign-in">
			<a href="/">
				<img src={logoImage} alt="logo" />
			</a>
		</div>

		<div class="sign-in">
			<div class="sign-in-input">
				<div class="sub-title">아이디</div>
				<div>
					<input type="email" placeholder="이메일을 입력해주세요." />
				</div>
			</div>

			<div class="sign-in-input">
				<div><div class="sub-title">비밀번호</div></div>
				<div>
					<input type="email" placeholder="비밀번호를 입력해주세요." />
				</div>
			</div>

			<div class="button-regular">
				<div>로그인</div>
			</div>

			<div class="another-sign-up-info">
				<div class="line" />
				<div class="info">다른 계정으로 로그인</div>
				<div class="line" />
			</div>

			<div class="another-sign-up">
				<div class="another-logo-container">
					<div class="container">
						<div class="another-logo google">
							<img src={googleLogoImage} alt="google" />
						</div>
						<div class="another-text">Google</div>
					</div>
					<div class="container">
						<div class="another-logo naver">
							<img src={naverLogoImage} alt="naver" />
						</div>
						<div class="another-text">Naver</div>
					</div>
					<div class="container">
						<div class="another-logo kakao">
							<img src={kakaoLogoImage} alt="kako" />
						</div>
						<div class="another-text">Kakao</div>
					</div>
				</div>
			</div>
		</div>
		<div class="find-content">
			<div>비밀번호 찾기</div>
			<div>|</div>
			<div>아이디 찾기</div>
			<div>|</div>
			<a href="/sign_up">
				<div>회원가입</div>
			</a>
		</div>
	</div>
</div>
