import { CartItem, Product, ProductColor } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';

export function getGeneralWhatsAppUrl(subject?: string): string {
  let text = 'Olá! Estava no site da loja de laços e gostaria de tirar uma dúvida sobre os acessórios para meninas.';
  if (subject) {
    text = `Olá! Gostaria de falar sobre: ${subject}. Poderiam me ajudar?`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(product: Product, selectedColor: ProductColor): string {
  const text = `Olá! Amei o laço no site e gostaria de encomendar:
🎀 *${product.name}*
🎨 Cor: ${selectedColor.name}
📏 Tamanho: ${product.size}
💰 Valor: R$ ${product.price.toFixed(2).replace('.', ',')}
✨ Acabamento: ${product.baseTypeName}

Vocês têm disponível para envio? Como posso prosseguir com o pagamento?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getCartWhatsAppUrl(
  items: CartItem[],
  childName?: string,
  city?: string,
  deliveryPreference?: string
): string {
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  let message = `Olá! Montei meu pedido no site e gostaria de finalizar:\n\n`;

  if (childName && childName.trim()) {
    message += `👧 *Nome da Princesa:* ${childName.trim()}\n`;
  }
  if (city && city.trim()) {
    message += `📍 *Cidade / Estado:* ${city.trim()}\n`;
  }
  if (deliveryPreference) {
    message += `🚚 *Preferencia:* ${deliveryPreference}\n`;
  }

  message += `\n🛍️ *ITENS DO PEDIDO:*\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}* (${item.quantity}x)\n`;
    message += `   • Cor: ${item.selectedColor.name}\n`;
    message += `   • Acabamento: ${item.product.baseTypeName}\n`;
    message += `   • Subtotal: R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
  });

  message += `💵 *TOTAL ESTIMADO: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
  message += `Por favor, confirmem a disponibilidade e o valor do frete para o meu CEP. Muito obrigada! 🌸`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getCustomKitWhatsAppUrl(
  kitName: string,
  bowNames: string[],
  boxColor: string,
  childName: string,
  totalPrice: number
): string {
  let message = `Olá! Montei um *Kit de Laços Personalizado* no site:\n\n`;
  message += `🎁 *${kitName}*\n`;
  if (childName) {
    message += `👧 *Nome na Tag:* ${childName}\n`;
  }
  message += `🎀 *Cor do Laço da Caixa:* ${boxColor}\n\n`;
  message += `*Laços Escolhidos:*\n`;
  bowNames.forEach((name, i) => {
    message += ` ${i + 1}. ${name}\n`;
  });
  message += `\n💰 *Valor Promocional do Kit:* R$ ${totalPrice.toFixed(2).replace('.', ',')}\n\n`;
  message += `Gostaria de fechar esse kit especial! Como podemos combinar o envio?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
