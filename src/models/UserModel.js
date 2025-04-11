import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Nome é obrigatório' },
      len: {
        args: [2, 100],
        msg: 'Nome deve ter entre 2 e 100 caracteres'
      }
    }
  },

  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: {
      msg: 'Este email já está em uso'
    },
    validate: {
      isEmail: { msg: 'Email inválido' }
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Senha é obrigatória' },
      len: {
        args: [6, 100],
        msg: 'Senha deve ter pelo menos 6 caracteres'
      }
    }
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'CPF já cadastrado'
    },
    validate: {
      len: {
        args: [11, 14],
        msg: 'CPF deve ter entre 11 e 14 caracteres'
      }
    }
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: 'CLIENT',
    validate: {
      isIn: {
        args: [['CLIENT', 'ADMIN']],
        msg: 'Role deve ser CLIENT ou ADMIN'
      }
    }
  }

}, {
  tableName: 'users',
  timestamps: true,
  underscored: true
});

export default User;
