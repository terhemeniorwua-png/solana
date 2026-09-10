function icuPlural(template, params) {
  return template.replace(
    /\{(\w+), plural, one \{(.*?)\} other \{(.*?)\}\}/g,
    (_match, name, one, other) => {
      const value = Number(params[name]);
      const choice = value === 1 ? one : other;
      return choice.replace(/#/g, String(value));
    },
  );
}

function interp(template, params = {}) {
  return icuPlural(template, params).replace(/\{(\w+)\}/g, (_match, name) =>
    name in params ? String(params[name]) : `{${name}}`,
  );
}

function flattenKeys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === "object" ? flattenKeys(value, path) : [[path, value]];
  });
}

export function buildT(copy) {
  const entries = new Map(flattenKeys(copy));

  const t = (key, params) => {
    const template = entries.get(key);
    return template === undefined ? key : interp(template, params);
  };

  t.rich = (key, fns = {}) => {
    const template = entries.get(key);
    if (template === undefined) {
      return key;
    }

    const params = Object.fromEntries(
      Object.entries(fns).filter(([, value]) => typeof value !== "function"),
    );
    const parts = [];
    const re = /(<(\w+)>(.*?)<\/\1>)/gs;
    let lastIndex = 0;
    let match;

    while ((match = re.exec(template)) !== null) {
      parts.push(interp(template.slice(lastIndex, match.index), params));
      const [full, tag, inner] = match;
      const fn = fns[tag];
      parts.push(fn ? fn(interp(inner, params)) : full);
      lastIndex = match.index + full.length;
    }

    parts.push(interp(template.slice(lastIndex), params));
    return parts;
  };

  return t;
}

