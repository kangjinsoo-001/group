<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
	import { t } from "$lib/translations";

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
			<div class="sign-up-sec-info">{$t("sign_up.signUp")}</div>
			<div class="sign-up-info-container">
				<div class="info">
					{$t(`sign_up.title.${procedure}`).split("\n")[0]}
				</div>
				<div class="info sec">
					{$t(`sign_up.title.${procedure}`).split("\n")[1]}
				</div>
			</div>
			<div class="sign-in-input">
				<div class="sign-up-email-input">
					{#if procedure === "first"}
						<input
							class="mr10"
							type="email"
							placeholder={$t("sign_up.placeholder.email")}
						/>
						<input type="email" placeholder={$t("sign_up.placeholder.email")} />
					{:else if procedure === "second"}
						<input type="email" placeholder={$t("sign_up.placeholder.code")} />
					{:else if procedure === "third"}
						<input
							type="email"
							placeholder={$t("sign_up.placeholder.nickName")}
						/>
					{/if}
				</div>
			</div>
			<div class="flc jsb">
				{#if procedure !== "first"}
					<div
						class="go-back-btn"
						on:click={() => handleChange(procedure, "desc")}
					>
						{$t("sign_up.goBack")}
					</div>
				{:else}
					<div />
				{/if}
				{#if procedure === "fourth"}
					<a href="/">
						<div class="basic-btn">{$t("sign_up.toMainPage")}</div>
					</a>
				{:else}
					<div
						class="basic-btn"
						on:click={() => handleChange(procedure, "asc")}
					>
						{$t("sign_up.next")}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
