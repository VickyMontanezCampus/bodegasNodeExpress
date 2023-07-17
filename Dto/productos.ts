import { Expose, Type, Transform } from 'class-transformer';

export class productos {

    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del Id no cumple con los párametros establecidos"}}, { toClassOnly: true })
    ID: number;

    @Expose({ name: 'nombre' })
    @Transform(({value})=>{ if(/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/.test(value)) return value ; else throw {status:400, message: "Los datos del nombre del producto no cumplen con los párametros establecidos"}})
    nom_prd : string;

    @Expose({ name: 'descripcion' })
    @Transform(({value})=>{ if( /^[a-z A-Z]+$/.test(value)) return value ; else throw {status:400, message: "Los datos de la descripción no cumplen con los párametros establecidos"}})
    desp: string;

    @Expose({ name: 'estado' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del estado no cumple con los párametros establecidos"}}, { toClassOnly: true })
    estado: number;

    @Expose({ name: 'created_by' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del created_by no cumple con los párametros establecidos"}}, { toClassOnly: true })
    createdBy: number;

    @Expose({ name: 'update_by' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del update_by no cumple con los párametros establecidos"}}, { toClassOnly: true })
    updateBy: number;

    @Expose({ name: 'foto' })
    @Transform(({value})=>{ 
        if( /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(value)) return value ;
        else throw {status:400, message: "Los datos de la foto no cumplen con los párametros establecidos"}})
    photo: string;

    @Expose({ name: 'contraseña' })
    @Transform(({value})=>{ 
        if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) return value ;
        else throw {status:400, message: "Los datos de la contraseña no cumplen con los párametros establecidos"}})
    pswd: string;

    @Expose({ name: 'created_at' })
    createdAt: Date;

    @Expose({ name: 'updated_at' })
    updatedAt: Date;

    @Expose({ name: 'deleted_at' })
    deletedAt: Date;

    constructor(
        ID: number,
        nom_prd: string,
        desp: string,
        estado: number,
        createdBy: number,
        updateBy: number,
        photo:string,
        pswd: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.nom_prd = nom_prd;
        this.desp = desp;
        this.estado = estado;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.photo = photo;
        this.pswd = pswd;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}