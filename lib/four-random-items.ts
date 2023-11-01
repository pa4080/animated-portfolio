/**
 * @usage
 * 		const services = messages.Services.items;
 * 		const pick4Services = fourRandomItems({ items: services });
 */

export function fourRandomItems<T>(items: { items: T[] }) {
	const fourNumbers: T[] = [];

	while (fourNumbers.length < 4) {
		const randomIndex = Math.floor(Math.random() * items.items.length);

		if (fourNumbers.includes(items.items[randomIndex])) {
			continue;
		}

		fourNumbers.push(items.items[randomIndex]);
	}

	return fourNumbers;
}
