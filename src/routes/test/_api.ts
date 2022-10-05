const base = "http://localhost:8000";

export function api(method: string, resource: string, data?: any) {
	const address = `${base}/${resource}`;

	return fetch(address, {
		method,
		body: data
	});
}
