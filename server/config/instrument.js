// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
Sentry.init({
  dsn: "https://995f2663b13ad6d90011c62571ec2315@o4510057586294784.ingest.us.sentry.io/4510057592455168",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});