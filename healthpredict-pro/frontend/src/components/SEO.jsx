import { HeadProvider, Title, Meta } from "react-head";

export default function SEO({ title, description }) {
  return (
    <HeadProvider>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
    </HeadProvider>
  );
}
