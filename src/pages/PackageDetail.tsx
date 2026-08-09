import { Navigate, useParams } from "react-router-dom";
import PackageDetailPage from "@/components/sections/PackageDetailPage";
import NotFound from "@/pages/NotFound";
import { getPackageBySlug } from "@/data/packages";

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    if (slug === "scalability") {
      return <Navigate to="/packages/scalability-blueprint" replace />;
    }
    return <NotFound />;
  }

  return <PackageDetailPage pkg={pkg} />;
};

export default PackageDetail;
