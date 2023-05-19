const FormCheckOutPresentation = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <div className="container mt-5">
        <h2>Complete los campos</h2>
        <div className="border-bottom mb-3"></div>
        <form class="needs-validation" novalidate onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                placeholder="..."
                required
                name="Nombre"
                onChange={handleChange}
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip02">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip02"
                placeholder="..."
                required
                name="Apellido"
                onChange={handleChange}
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltipUsername">Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="validationTooltipUsernamePrepend"
                  >
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltipUsername"
                  placeholder="Ej:minombre@gmail.com"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                  name="Email"
                  onChange={handleChange}
                />
                <div class="invalid-tooltip"></div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">Numero de tarjeta</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
                placeholder="Number Card"
                required
                name="Numero de tarjeta"
                onChange={handleChange}
              />
              <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip04">Pais</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip04"
                placeholder="Pais"
                required
                name="Pais"
                onChange={handleChange}
              />
              <div class="invalid-tooltip">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                placeholder="Zip"
                required
                name="Zip"
                onChange={handleChange}
              />
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCheckOutPresentation;
