export const rateLimit = () => {
  const ipCache = new Map<string, { count: number; timestamp: number }>();

  return {
    check: (ip: string, limit: number, windowMs: number) => {
      const now = Date.now();
      const record = ipCache.get(ip);

      if (!record) {
        ipCache.set(ip, { count: 1, timestamp: now });
        return true;
      }

      if (now - record.timestamp > windowMs) {
        ipCache.set(ip, { count: 1, timestamp: now });
        return true;
      }

      if (record.count >= limit) {
        return false;
      }

      record.count += 1;
      return true;
    },
  };
};
