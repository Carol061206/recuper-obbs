import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_cliente extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nm_cliente: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_telefone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ds_codigo_rec: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  }
}
