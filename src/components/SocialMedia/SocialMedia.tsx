type SocialMediaProps = {
  id: string;
  size: number;
  link: string;
  IconName: any;
};

/**
 * @export
 * @component
 * @name SocialMedia
 *
 * @description
 * Responsible for assemble the social media.
 */
export function SocialMedia({
  size,
  link,
  id,
  IconName,
}: SocialMediaProps): JSX.Element {
  return (
    <div className="flex gap-6 items-center justify-between lg:gap-3">
      <a id={id} href={link} target="_blank" rel="noreferrer">
        <IconName color="white" height={size} width={size} />
      </a>
    </div>
  );
}
