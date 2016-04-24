export default function generateKey(key) {
  return {
    label: key,
    action: () => key
  };
}
