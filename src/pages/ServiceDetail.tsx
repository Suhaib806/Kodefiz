import { Navigate, useParams } from "react-router-dom";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import NotFound from "@/pages/NotFound";
import { getServiceBySlug, legacyServiceRedirects } from "@/data/serviceDetails";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug && legacyServiceRedirects[slug]) {
    return <Navigate to={`/services/${legacyServiceRedirects[slug]}`} replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  return <ServiceDetailPage service={service} />;
};

export default ServiceDetail;
