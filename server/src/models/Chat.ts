import {
    Entity,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { User } from './User';
import { Product } from './Product';
import { Message } from './Message';

@Entity()
export class Chat extends Message {
    @OneToOne(() => Product, (Product) => Product.owner, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    owner: User
    
    @OneToOne(() => User, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    client: User
}
