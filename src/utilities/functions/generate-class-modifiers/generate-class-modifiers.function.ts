import { IClassModifierInput } from "./generate-class-modifiers.function.interface.ts";

export const generateClassModifier = (input: IClassModifierInput): string => {
	const { modifier } = input;

	const evaluate = input.evaluate ?? (() => true);

	return evaluate() ? modifier : "";
}

export const generateClassModifiers = (baseClass: string, inputs: IClassModifierInput[]): string => {
	return inputs
		.map(input => {
			const modifier = generateClassModifier(input);

			return modifier ? `${baseClass}--${modifier}` : "";
		})
		.join(" ");
};