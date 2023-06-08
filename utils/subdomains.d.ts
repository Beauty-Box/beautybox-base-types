declare function removeSubdomain(onlyHost?: boolean): string;

declare function getHostWithNewSubdomain(host: string, subdomain: string): string;

export { removeSubdomain, getHostWithNewSubdomain };