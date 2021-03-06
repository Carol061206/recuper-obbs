import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_venda extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_sti_endereco',
        key: 'id_endereco'
      }
    },
    ds_codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_venda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_forma_pagamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_situacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_endereco",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
    ]
  });
  }
}
