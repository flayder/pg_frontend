export default defineNuxtPlugin(async (nuxtApp) => {
  const ip = nuxtApp.ssrContext?.event?.node?.req?.headers['x-forwarded-for'] ||
             nuxtApp.ssrContext?.event?.node?.req?.socket?.remoteAddress ||
             'unknown';

  const userAgent = nuxtApp.ssrContext?.event?.node?.req?.headers['user-agent'] || '';
  const referer = nuxtApp.ssrContext?.event?.node?.req?.headers['referer'] || 'direct';

  // фильтрация или логика
  const isBot = /bot|crawl|slurp|spider|facebook|telegram|discord/i.test(userAgent);
  const isFromSelf = /porngamestown\.com|localhost/i.test(referer);

  if (!isBot && !isFromSelf && referer != 'direct') {
    // Отправка запроса к API
    await $fetch(`https://porngamestown.com/api/metrica`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        event: 'referer',
        ip,
        value: referer
      }
    });
  }
});