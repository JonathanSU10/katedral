import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link 
                  to={item.path || "#"} 
                  className="text-primary hover:text-accent hover:underline"
                >
                  {item.name}
                </Link>
                <span className="mx-2 text-muted-foreground">/</span>
              </>
            ) : (
              <span className="text-muted-foreground font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;