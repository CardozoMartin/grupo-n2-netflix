export class Pelicula{
    constructor(titulo,tipo,caratula,genero,descripcion,trailer){
        this.codigo = self.crypto.randomUUID();
         this.titulo = titulo;
         this.tipo = tipo;
         this.caratula = caratula;
         this.genero = genero;
         this.descripcion = descripcion;
         //this.estaPublicada = estaPublicada;
         this.destacada = false;
         this.trailer = trailer;
    }
};

