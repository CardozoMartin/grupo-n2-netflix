export class Pelicula{
    constructor(titulo,tipo,caratula,genero,descripcion){
        this.codigo = self.crypto.randomUUID();
         this.titulo = titulo;
         this.tipo = tipo;
         this.caratula = caratula;
         this.genero = genero;
         this.descripcion = descripcion;
         //this.estaPublicada = estaPublicada;
    }
};

