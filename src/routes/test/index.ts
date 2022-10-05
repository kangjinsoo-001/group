import { api } from "./_api";

export const post: any = async ({ request, locals }: any) => {
	const form = await request.formData();
	const result = await api("post", "users", form);
	console.log("result : ", result);

	return {
		status: 201,
		headers: {
			location: "/"
		}
	};
};
