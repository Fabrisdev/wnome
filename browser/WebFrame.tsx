type Props = {
  url: string;
};

export function WebFrame({ url }: Props) {
  return (
    <iframe
      src={url}
      className="min-w-250 min-h-150"
      title="Embedded Browser"
    />
  );
}
