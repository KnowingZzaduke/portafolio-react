import { useRouteError } from "react-router-dom";
export function Error() {
  const error = useRouteError();
  return (
    <div id="error_page">
      <div className="content_error-page">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado</p>
        <p>
          <i>Error 404</i>
        </p>
      </div>
    </div>
  );
}
