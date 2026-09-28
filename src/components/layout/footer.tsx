import { site } from "@/../content/site";

export function Footer() {
  return (
    <footer className="max-w-[1120px] mx-auto mt-[90px] px-[max(5vw,20px)] py-[26px] pb-[60px] border-t border-border flex justify-between gap-[10px] flex-wrap text-muted-foreground text-[0.85rem]">
      <span>{site.footer.left}</span>
      <span>{site.footer.right}</span>
    </footer>
  );
}
