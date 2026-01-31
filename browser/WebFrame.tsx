type Props = {
  url: string;
};

export function WebFrame({ url }: Props) {
  return (
    <iframe
      src={url}
      className="min-w-250 w-full min-h-150 h-full rounded-b-xl"
      title="Embedded Browser"
    />
  );
}
