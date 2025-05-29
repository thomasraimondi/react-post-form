export default function Alert({ message, type }) {
  console.log(type);
  return <div className={`border-${type}-300 border-2 text-${type}-500 p-2 rounded-md`}>{message}</div>;
}
