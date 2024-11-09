export const metadata = {
  title: "App Router",
};

export default async function Page() {
  await new Promise((resolove) => setTimeout(resolove, 1000));
  return <h1>App Router</h1>;
}
