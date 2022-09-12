interface Course {
  title: string;
}

export function countWords(str: string): number {
  return str.split(" ").length;
}

export function countChars(str: string): number {
  return str.split("").length;
}

export function show(element: Element) {
  element.classList.remove("hidden");
}

export function hide(element: Element) {
  element.classList.add("hidden");
}

export function getOneByTitle(title: string) {
  if (title.length >= 3) {
    const courses: Course[] = [
      {
        title: "✌️ Vue 3: Novedades aplicadas al mundo real",
      },
      { title: "🐂 Makefiles" },
      {
        title: "💻 Bash para el día a día: Scripting & Productividad",
      },
    ];

    return courses.find((x) => x.title.includes(title));
  }
}
