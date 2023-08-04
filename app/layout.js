export const metadata = {
  title: "Designo",
  description: "Designo - web design and development agency",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
