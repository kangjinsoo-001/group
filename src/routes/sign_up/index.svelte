<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
	type Procedure = "first" | "second" | "third" | "fourth";
	let procedure: Procedure = "first";

	function handleChange(value: Procedure, order: "asc" | "desc") {
		switch (value) {
			case "first":
				procedure = order === "asc" ? "second" : "first";
				break;
			case "second":
				procedure = order === "asc" ? "third" : "first";
				break;
			case "third":
				procedure = order === "asc" ? "fourth" : "second";
				break;
			case "fourth":
				procedure = order === "asc" ? "fourth" : "third";
				break;
			default:
				break;
		}
	}
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
			{#if procedure === "first"}
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
			{:else if procedure === "second"}
				<div class="sign-up-info-container">
					<div class="info">이메일로 발송된</div>
					<div class="info sec">6자리 코드를 입력해주세요.</div>
				</div>
				<div class="sign-in-input">
					<div class="sign-up-email-input">
						<input type="email" placeholder="6자리 코드를 입력해주세요." />
					</div>
				</div>
			{:else if procedure === "third"}
				<div class="sign-up-info-container">
					<div class="info">그룹에서 사용할</div>
					<div class="info sec">닉네임을 입력해주세요.</div>
				</div>
				<div class="sign-in-input">
					<div class="sign-up-email-input">
						<input type="email" placeholder="닉네임을 입력해주세요." />
					</div>
				</div>
			{:else if procedure === "fourth"}
				<div class="sign-up-info-container">
					<div class="info">000님, 반갑습니다.</div>
					<div class="info sec">회원가입에 성공했습니다.</div>
				</div>
			{/if}
			<div class="flc jsb">
				{#if procedure !== "first"}
					<div
						class="go-back-btn"
						on:click={() => handleChange(procedure, "desc")}
					>
						뒤로가기
					</div>
				{:else}
					<div />
				{/if}
				{#if procedure === "fourth"}
					<a href="/">
						<div class="basic-btn">메인페이지로</div>
					</a>
				{:else}
					<div
						class="basic-btn"
						on:click={() => handleChange(procedure, "asc")}
					>
						다음
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
