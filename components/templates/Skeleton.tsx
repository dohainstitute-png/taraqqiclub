export default function Skeleton() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="skeletonLine" />
      <div className="skeletonLine" />
      <div className="skeletonLine" style={{ width: "70%" }} />
    </div>
  );
}
