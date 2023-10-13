export const loader = () => {
  const robots = `User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: Omgili
Disallow: /

User-agent: FacebookBot
Disallow: /
`;

  return new Response(robots, {
    headers: {'Content-Type': 'text/plain'},
    status: 200
  });
};
