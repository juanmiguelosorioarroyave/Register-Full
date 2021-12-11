import './App.css';

function App() {
  return (
    <div>
              <div className="container">
                <h1>Registrarse</h1>
                <p>Por favor complete este formulario para crear una cuenta.</p>
                <hr />
                <label htmlFor="Nombre"><b>Nombre</b></label>
                <input type="text" placeholder="Enter Nombre" required />
                <label htmlFor="Apellidos"><b>Apellidos</b></label>
                <input type="text" placeholder="Enter Apellidos" required />
                <label htmlFor="Nombre"><b>Documento</b></label>
                <input type="text" placeholder="Enter Documento"  required />
                <label htmlFor="Telefono"><b>Numero Telefonico</b></label>
                <input type="text" placeholder="Enter Telefono"  required />
                <div class="caja">
                <label htmlFor="Genero"><b>Genero</b></label>
                <select>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otros</option>
                </select>
                </div>
                <label htmlFor="Ciudad"><b>Ciudad</b></label>
                <input type="text" placeholder="Enter Ciudad" required />
                <label htmlFor="Email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />
                <label htmlFor="Apellidos"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />                
                <hr />
                <p>Al crear una cuenta, acepta nuestros <a href="#">Terminos &amp; Privacidad</a>.</p>
                <button type="submit" className="registerbtn">Register</button>
              </div>
              <div className="container signin">
                <p>¿Ya tienes una cuenta? <a href="#">Inicia</a>.</p>
              </div>
            </div>
  );
}

export default App;
