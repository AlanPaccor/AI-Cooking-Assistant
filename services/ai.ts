export async function getCookingAdvice(input: string) {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(
                "Heat the pan on medium. Add oil. When it shimmers, you're ready"
            );
        }, 150);
    });
}